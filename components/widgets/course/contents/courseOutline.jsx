import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function CourseOutlines() {
    return (
        <div className="grid grid-cols-1 gap-0 w-full">

            {
                [
                    {
                        icon:<PaperClipIcon width={30} color='red'/>,
                        title:"Course outline",
                        type:"pdf"

                    },
                    {
                        icon:<PaperClipIcon width={30} color='red'/>,
                        title:"Additional course outline",
                        type:"pdf"

                    },
                ].map((courseOutline,key)=>{

            return <div key={key} className="md:flex border-t md:items-center md:justify-between bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer">
                <div className="min-w-0 flex-1">
                    <div className="mt-4 flex md:mt-0">

                    <div className="mr-4">
                        {courseOutline.icon}
                    </div>
                    <h2 className="text-xl leading-7 text-gray-500 sm:truncate sm:text-xl">
                        {courseOutline.title}
                    </h2>
                    </div>
                </div>
                <div className="mt-4 flex md:mt-0">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        Download
                    </button>
                   
                </div>
            </div>
                })
            }
        </div>
    )
}
