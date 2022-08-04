export function Post (props) {
   const {name, cb, id} = props
   return <div>
   <span> {name}   </span>
   <button onClick={() => cb(id)}> Delete</button>
   </div>
}