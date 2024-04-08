import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'
import { useState } from 'react'

export default function useAllArticles() {

  const axiosPublic = useAxiosPublic()
  const {data:allApprovedArticles} = useQuery({
    queryKey: ["allApprovedArticles"],
    queryFn: async()=> {
      const result = await axiosPublic.get("/all-approved-articles")
      const allCategories = result.data
      const test = allCategories.map(item => {
        const iterate = {[item.tag]: item.articles}
        return iterate
      })
   
      return test
    }
  })


  return allApprovedArticles
}
