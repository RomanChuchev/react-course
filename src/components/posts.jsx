import { Post } from "./post"

export function Posts(props) {
   
   const {posts, cb} = props

   return <div>
      {
         posts.map(post => (
            <Post 
               key={post.id} 
               id={post.id} 
               name={post.name} 
               cb={cb} />
         ))
      }
      </div>
}