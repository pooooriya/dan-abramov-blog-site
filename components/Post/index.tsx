import Link from 'next/link'
import React from 'react'

interface Props {
    headline: string
    datail: string
    description: string,
    id: number
}

const Post = ({ headline, datail, description, id }: Props): JSX.Element => {
    return (
        <div className='flex flex-col mt-10'>
            <Link href={`/post/${id}`}>
                <h2 className='text-3xl font-extrabold text-primary cursor-pointer dark:text-darkprimary'>{headline}</h2>
            </Link>
            <div className='mt-3'>
                <h5 className='font-thin font-xs dark:text-gray-300'>{datail}</h5>
                <h3 className='dark:text-gray-300'>{description}</h3>
            </div>
        </div>
    )
}

export default Post