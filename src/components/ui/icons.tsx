import Image from 'next/image'
import React from 'react'

const Icons = ({url}: {url: string}) => {
  return (
    <div>
        <Image
          src={url}
          alt="Icon"
          width={20}
          height={20}
          className="w-5 h-5"
        />
    </div>
  )
}

export default Icons