import React, { SVGProps } from 'react'
interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SideBarRow({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit cursor-pointer items-center space-x-2 rounded-full py-3 px-4 transition-all duration-200 hover:text-blue-500">
      <Icon className=" h-6 w-6 " />
      <p className="hidden md:inline-flex">{title}</p>
    </div>
  )
}

export default SideBarRow
