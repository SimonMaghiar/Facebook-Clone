import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story 
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
            profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQEZPy7xx712PQ/profile-displayphoto-shrink_200_200/0/1639264702010?e=1659571200&v=beta&t=w8p0hVgGO8AZ_U91VNR5LdbHc2Ao7fcMnhkXFWiTfUg"
            title="Simon Maghiar"
        />
         <Story 
            image="https://www.marxist.com/images/stories/economy/Money_-_Pictures_of_Money--Flickr_flickr.com--photos--pictures-of-money--17123251389.jpg"
            profileSrc="https://assets.wired.com/photos/w_1720/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg"
            title="Jeff Bezos"
        />
         <Story 
            image="https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
            title="Elon Musk"
        />
        <Story 
            image="https://virginradio.ro/wp-content/uploads/2021/03/concert-768722_1920.jpg"
            profileSrc="https://i.pinimg.com/736x/4a/5d/3c/4a5d3c1b84d603d65acf1569a1be3a53.jpg"
            title="Rihanna"
        />
        <Story 
            image="https://universul.net/wp-content/uploads/2022/06/Fed.jpg"
            profileSrc="https://www.gannett-cdn.com/presto/2020/05/18/USAT/b6bb0576-346c-4cf3-ba4e-89dead3a7f48-AP20138774576197.jpg"
            title="Powell Jerome"
        />
    </div>
  )
}

export default StoryReel