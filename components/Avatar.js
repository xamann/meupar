import React from 'react'
import { Avatar } from 'nottinderuikit'

const SimpleAvatar = () => {
  const uri = 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80';
  return <Avatar source={{ uri }} size={120} />
}

export default SimpleAvatar