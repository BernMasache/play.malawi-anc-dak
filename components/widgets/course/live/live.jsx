import CommentsComponent from "./comments/comments";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

export default function LiveLessonComponent() {
    return (
        <div className="relative bg-gray-100 p-4">
            <div className="mx-auto  sm:px-1 lg:px-1">
                <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-1  lg:grid-cols-4 gap-2">

                    <div className="mx-auto border-2 col-span-3">
                        <video class="flex w-full h-[60vh] max-w-full" controls autoPlay >
                            <source src="https://www.youtube.com/watch?v=djMy4QsPWiI" type="mp4" />
                        </video>
                    </div>
                    <div className="mx-auto w-full">
                        <div className="relative grid grid-rows-4 grid-flow-col gap-2 h-[30vh] sm:h-[20vh] md:h-[30vh] lg:h-[60vh] ">
                            <div className="p-2 absolute inset-x-0 shadow top-0 h-[20vh] sm:h-[10vh]  md:h-[20vh] lg:h-[50vh] overflow-y-scroll overflow-hidden">
                                <CommentsComponent />
                            </div>
                            <div className="absolute inset-x-0 bottom-0">
                                <form action="#" className="relative flex-auto">
                                    <div className="overflow-hidden rounded-lg pb-8 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">

                                        <textarea
                                            rows={2}
                                            name="comment"
                                            id="comment"
                                            className="p-2 block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Add your comment..."
                                            defaultValue={''}
                                        />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 border text-green-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>

                                        {/* <PlusIcon width={15} height={15}/> */}
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
