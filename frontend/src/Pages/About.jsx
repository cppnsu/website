import useGraphql from "../Hooks/useGraphql";

const About = () => {
  const reqBody = `
  {
    getAbout {
      _id
      Description
      Signup_Link
      Splash_photo_link
      Splash_photo_ID
      Board_Members {
        Name
        Position
        Year
        Major
        Headshot_Link
      }
      Gallery
    }  
  }
  `

  const { data, error } = useGraphql(reqBody)
  if (data) console.log("Here is the data: ", data)
  if (error) console.log("here is the error: ", error)

  return (
    <div>
      This is the about page
    </div>
  )
}

export default About;
