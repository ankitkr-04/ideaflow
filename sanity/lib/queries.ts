import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) 
  && !defined($search) 
  || title match $search 
  || category match $search 
  || author->name match $search
  ]  
  | order(_createdAt desc)
    {
   _id,
     title,
     slug,
     _createdAt,
     author-> {
       _id,name, image
     },
     views,description, category, image
}`);

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      // slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);