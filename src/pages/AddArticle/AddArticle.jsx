import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import Lottie from "react-lottie";

import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import "./addArcticle.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import usePublisher from "../../Hooks/usePublisher";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import addArticle from "../../assets/lottie/addArticle.json";

const options = {
  loop: true,
  autoplay: true,
  animationData: addArticle,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const selectStyle = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? "none" : "none",
    outline: state.isFocused ? "none" : "none",
    boxShadow: 0,
    background: "transparent",
    color: "black",
    borderBottom:"1.8px solid black",
    borderRadius:0
  }),
};


const tagsOption = [
  { value: "politics", label: "Politics" },
  { value: "business", label: "business" },
  { value: "entertainment", label: "Entertainment" },
  { value: "sports", label: "Sports" },
  { value: "local updates", label: "Local Updates" },
  { value: "international", label: "International News" },
];
export default function AddArticle() {
  const axiosPublic = useAxiosPublic();
  const axisSecure = useAxiosSecure();
  const publishers = usePublisher();

  const { user } = useContext(AuthContext);

  const publisherOption = publishers?.map((publisher) => {
    const option = {
      value: publisher?.publisherName,
      label: publisher?.publisherName,
    };
    return option;
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    const toastId = toast.loading("Creating...");
    const date = new Date();
    const postedDate = date.toLocaleDateString("en-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formData = new FormData();
    formData.append("image", data.image[0]);
    axiosPublic
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_api_key
        }`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        const article = {
          author: user?.displayName,
          authorEmail: user?.email,
          authorImage: user?.photoURL,
          title: data.title,
          image: res?.data?.data?.display_url,
          publisher: data?.publisher.value,
          tag: data?.tags.value,
          description: data?.description,
          isPremium: false,
          state: "pending",
          viewCount: 0,
          postedDate,
        };
        axisSecure
          .post("/articles", article)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                confirmButtonColor: "#5e503f",
                title: "Article Submitted successfully",
                text: "Have patience until approved",
              });
            }
            toast.remove(toastId);
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              confirmButtonColor: "#5e503f",
              title: error.message,
              text: error.message,
            });
            toast.remove(toastId);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#5e503f",
          title: error.message,
        });
        toast.remove(toastId);
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        position: "relative",
       
      }}
    >
      <Box sx={{ position: "absolute", top: 0, height: "90vh", left: 0, zIndex:-1 }}>
        <Lottie options={options} />
      </Box>
      <>
        <Card
          sx={{
            maxWidth: 700,
            border: "none",
            backgroundColor: "transparent",
            minHeight: "100vh",
            p: { sm: 5 },
            borderRadius:0,
            boxShadow:0
           
          }}
        >
          <CardContent>
            <Paper elevation={3} sx={{background:"rgba(198, 172, 143, 0.75)", border:"2px solid #c6ac8f "}}>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container columnSpacing={2} rowGap={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        {...register("title", { required: true })}
                        type="text"
                        label="title"
                        variant="standard"
                        fullWidth
                        sx={{ borderBottom:"1px solid black"}}
                      />
                      {errors.title?.type === "required" && (
                        <Typography color="red">Title is require</Typography>
                      )}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Article Image"
                        type="file"
                        variant="standard"
                        {...register("image", { required: true })}
                        sx={{ borderBottom:"1px solid black"}}
                      />
                      {errors.image?.type === "required" && (
                        <Typography color="red">Image is require</Typography>
                      )}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        control={control}
                        name="tags"
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            className="tags"
                            placeholder="select tag"
                            styles={selectStyle}
                            options={tagsOption}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="publisher"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            placeholder="select publisher"
                            className="tags"
                            styles={selectStyle}
                            options={publisherOption}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        label="Description"
                        type="text"
                        {...register("description", { required: true })}
                        variant="standard"
                        fullWidth
                        multiline
                        rows={6}   
                        sx={{ borderBottom:"1px solid black"}}
                      />
                      {errors.tags?.type === "required" && (
                        <Typography color="red">
                          Description is require
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        sx={{ mt: 5 }}
                        type="submit"
                      >
                        Add Article
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Paper>
          </CardContent>
        </Card>
      </>
    </Box>
  );
}
