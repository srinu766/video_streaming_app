import React from 'react'

const CommentsData =[
    {
        name:"srinu",
        text:"lorem data for comments",
        replies:[

        ]
    },
    {
        name:"srinu",
        text:"lorem data for comments",
        replies:[
            {
                name:"srinu",
                text:"lorem data for comments",
                replies:[
                    {
                        name:"srinu",
                        text:"lorem data for comments",
                        replies:[
                            
                        ]
                    },
                    {
                        name:"srinu",
                        text:"lorem data for comments",
                        replies:[
                            
                        ]
                    }
                    
                ]
            },
            {
                name:"srinu",
                text:"lorem data for comments",
                replies:[
                    
                ]
            },
            {
                name:"srinu",
                text:"lorem data for comments",
                replies:[
                    {
                        name:"srinu",
                        text:"lorem data for comments",
                        replies:[
                            
                        ]
                    },
                    {
                        name:"srinu",
                        text:"lorem data for comments",
                        replies:[
                            
                        ]
                    }
                ]
            }
            
        ]
    },
    {
        name:"srinu",
        text:"lorem data for comments",
        replies:[
            
        ]
    }, {
        name:"srinu",
        text:"lorem data for comments",
        replies:[
            
        ]
    }, {
        name:"srinu",
        text:"lorem data for comments",
        replies:[
            
        ]
    }
]

const CommentsList =({comments})=>{
    //Dont use index as key
    return comments.map((comment, index)=>(
        <div key={index}>
        <Comment  data={comment}/>
        <div className='pl-10  border-l-black'>
        <CommentsList  comments={comment.replies}/>

        </div>
        </div>
        
        )
    )
   
}

const Comment = ({data})=>{
    const {name, text, replies} = data;
    return(

    
     <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg  my-2'>
        <img alt='' className='w-6 h-6'
         src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        <div className='px-2'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
        </div>
    </div>
    )
}




const CommentsContainer = () => {
  return (
    <div>
      <h1 className='font-bold text-xl'>Comments:</h1>
      <CommentsList comments={CommentsData}/>

    </div>
  )
}

export default CommentsContainer
