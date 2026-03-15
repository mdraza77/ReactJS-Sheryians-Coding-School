import React from "react";
import Card from "./components/Card";
import { Users } from "lucide-react";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
      nameOfCompany: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      nameOfCompany: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      nameOfCompany: "Microsoft",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      nameOfCompany: "Meta",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      nameOfCompany: "Netflix",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://fabrikbrands.com/wp-content/uploads/Adobe-Logo-History-1-1155x770.png",
      nameOfCompany: "Adobe",
      datePosted: "2 weeks ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$47/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/042/148/631/non_2x/spotify-logo-spotify-social-media-icon-free-png.png",
      nameOfCompany: "Spotify",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$46/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://brandlogos.net/wp-content/uploads/2022/07/airbnb-logo_brandlogos.net_vb6uh.png",
      nameOfCompany: "Airbnb",
      datePosted: "3 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://www.logoshape.com/wp-content/uploads/2024/09/uber-logo-svg_logoshape.png",
      nameOfCompany: "Uber",
      datePosted: "6 days ago",
      post: "Backend Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8GMkNjXaDJieiDTHt_-4sRznwIhRaVpIIQ&s",
      nameOfCompany: "Shopify",
      datePosted: "1 day ago",
      post: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$44/hr",
      location: "Remote",
    },
  ];

  return (
    <div>
      <div className="parent">
        {/* <Card /> */}
        {jobOpenings.map(function (elem, idx) {
          return (
            <div key={idx}>
              <Card
                company={elem.nameOfCompany}
                logo={elem.brandLogo}
                datePosted={elem.datePosted}
                post={elem.post}
                tag1={elem.tag1}
                tag2={elem.tag2}
                pay={elem.pay}
                location={elem.location}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
