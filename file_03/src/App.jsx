import Card from "./components/Card"


const App = () => {
  const jobopenings=[
  {
    "companyName": "Google",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "location": "Bengaluru, India",
    "postDate": "3 minutes ago",
    "role": "Software Developer",
    "time": "full time",
    "level": "junior level",
    "pay": "$45/hr"
  },
  {
    "companyName": "Microsoft",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    "location": "Hyderabad, India",
    "postDate": "2 hours ago",
    "role": "Full Stack Engineer",
    "time": "full time",
    "level": "entry level",
    "pay": "$40/hr"
  },
  {
    "companyName": "Amazon",
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10",
    "location": "Mumbai, India",
    "postDate": "1 day ago",
    "role": "Software Development Engineer II",
    "time": "full time",
    "level": "senior level",
    "pay": "$75/hr"
  },
  {
    "companyName": "Apple",
    "companyLogo": "https://cdn-icons-png.flaticon.com/512/0/747.png",
    "location": "Cupertino, CA, USA",
    "postDate": "3 days ago",
    "role": "iOS Software Developer",
    "time": "full time",
    "level": "senior level",
    "pay": "$95/hr"
  },
  {
    "companyName": "Meta",
    "companyLogo": "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_sq.jpg",
    "location": "London, UK",
    "postDate": "5 hours ago",
    "role": "Frontend Developer Intern",
    "time": "part time",
    "level": "Intern",
    "pay": "$35/hr"
  },
  {
    "companyName": "NVIDIA",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    "location": "Pune, India",
    "postDate": "1 week ago",
    "role": "AI Software Engineer",
    "time": "full time",
    "level": "junior level",
    "pay": "$55/hr"
  },
  {
    "companyName": "Netflix",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "location": "Los Gatos, CA, USA",
    "postDate": "2 weeks ago",
    "role": "Backend Software Developer",
    "time": "full time",
    "level": "senior level",
    "pay": "$110/hr"
  },
  {
    "companyName": "Adobe",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    "location": "Noida, India",
    "postDate": "4 days ago",
    "role": "C++ Software Developer",
    "time": "full time",
    "level": "entry level",
    "pay": "$38/hr"
  },
  {
    "companyName": "Uber",
    "companyLogo": "https://sm.mashable.com/t/mashable_sea/news/u/ubers-new-/ubers-new-logo-is-just-the-word-uber_sf59.1200.jpg",
    "location": "Amsterdam, Netherlands",
    "postDate": "6 days ago",
    "role": "Systems Software Developer",
    "time": "full time",
    "level": "junior level",
    "pay": "$60/hr"
  },
  {
    "companyName": "Stripe",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    "location": "Remote - US",
    "postDate": "12 hours ago",
    "role": "Payment Infrastructure Developer",
    "time": "full time",
    "level": "senior level",
    "pay": "$85/hr"
  }
]
  return (
    <div className="parent">
      {jobopenings.map((element, index) => {
        return <div key={index}>
          <Card icon={element.companyLogo} comp_name={element.companyName} post_date={element.postDate} role={element.role} time={element.time} level={element.level} pay={element.pay} location={element.location}/>
        </div>
      })}
    </div>
  )
}

export default App

