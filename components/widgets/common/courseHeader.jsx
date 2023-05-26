export default function CourseHeader() {
    return (
      <div className="md:flex md:items-center md:justify-between md:space-x-5 mt-8 mb-8">
        <div className="flex items-start space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                className="h-16 w-16 rounded-full"
                src="./assets/logos/computer.png"
                alt=""
              />
              <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
            </div>
          </div>
          {/*
            Use vertical padding to simulate center alignment when both lines of text are one line,
            but preserve the same layout if the text wraps without making the image jump around.
          */}
          <div className="pt-1.5">
            <h1 className="text-2xl font-bold text-gray-900">Antinantal Care Service</h1>
           
            <p className="text-sm font-medium text-gray-500">
            PATIENT : Rosemary Muliokela
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
         
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Back
          </button>
        </div>
      </div>
    )
  }
  