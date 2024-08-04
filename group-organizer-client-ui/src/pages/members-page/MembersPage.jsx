import { useEffect, useState } from "react";
import "./membersPage.css";
import { create, getHealth } from "../../services/healthServices";

export const MembersPage = () => {
const [items, setItems] = useState([]);
const [request, setRequest] = useState({
nickName:"",
bio:"",
avatarUrl:"",
age: 0,
groupId: 0,
});

const [isChange, setIsChange] = useState(false);

useEffect(() => {
  getItems ();
}, []);

useEffect(() => {
   getItems ();
}, [isChange]);

const getItems = async () => {
     const result = await getHealth();
     setItems(result.data);
   };
 
   const handleInput = (event) => {
     const {name, value} = event.target;
     setRequest((previous) => ({ ...previous, [name] : value }));
 };

 const handleSubmit = async () => {
     const data = await create(request);
     console.log("member created:" , data);
     setIsChange(!isChange);
    };

    /*const updateItems = async (id = 0, data = {}) => {
        const result = await http.put(`/members/${id}`, data);
        return result.data; 
    };*/
    return (
     <div className="home-page">
        {/*<pre>{JSON.stringify(items, null, 2)}</pre>*/}
        {/*<pre>{JSON.stringify(request, null, 2)}</pre>*/}

        <form>
          <label htmlFor="nickName">new member nickName
           
           <input type = "text" 
           name="nickName" 
           value={request.nickName} 
           onChange = {handleInput}/>
          </label>

          <label htmlFor ="bio">new member bio
               
               <input type = "text"
                name="bio"
                value={request.bio} 
                onChange = {handleInput}/>
          </label>
          
          <label htmlFor="age">new member age
          
           <input type = "text" 
           name="age" 
           value={request.age} 
           onChange = {handleInput}/>
          </label>
          
          <label htmlFor="avatarUrl">new member avatarUrl
          
           <input type = "text" 
           name="avatarUrl" 
           value={request.avatarUrl} 
           onChange = {handleInput}/>
          </label>

          <label htmlFor="groupId">new member groupId
          
           <input type = "text" 
           name="groupId"
           value={request.groupId} 
           onChange = {handleInput}/>
          </label>
         
          <button type="button" onClick = {handleSubmit}>
          Create new member
        </button>
                  </form>
       {items.length > 0 ? (
         <ul>
           {items.map((item, i) => (
             <li key={i}>
               <h4>{item.NickName}</h4>
               <p>{item.MemberId}</p>
             </li>
           ))}
         </ul>
       ) : (
         <h3>Loading items...</h3>
       )}
     </div>
   );
};

