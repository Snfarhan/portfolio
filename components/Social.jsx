import Link from "next/link";

import { FaGithub, FaLinkedinIn,  } from 'react-icons/fa'

const socials = [
  {icon: <FaGithub />, path: 'https://github.com/Snfarhan'},
  {icon: <FaLinkedinIn />, path: 'https://linkedin.com/in/muhammad-farhan-858a77267/'},
]

const Social = ({containertSyles,iconStyles}) => {
  return (
    <div className={containertSyles}>
      {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social