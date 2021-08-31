import Image from 'next/image'
import {
    ThumbUpIcon
} from '@heroicons/react/outline'

const Result = ({result}) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/original'
    return (
        <div className="group cursor-pointer">
            <Image
                layout="responsive"
                src={`${IMG_URL}${result.backdrop_path}`}
                height={1080}
                width={1920}
                className="duration-700 transform group-hover:scale-105"/>
            <div className="p-2">
                <p className="truncate max-w-md text-sm text-gray-400">{result.overview}</p>
                <h2 className="group-hover:font-bold">{result.title ? result.title : 'Unknown'}</h2>

                <div className="flex items-center opacity-0 group-hover:opacity-100 text-gray-500 text-sm">
                    <p className="capitalize">{result.media_type ? `${result.media_type} .` : 'Unknown .'}</p>
                    <p className="ml-3">{result.release_date || result.first_air_date}</p>
                    <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
                </div>
            </div>
        </div>
    )
}

export default Result
