

// eslint-disable-next-line react/prop-types
export default function Loading({uploading}) {


  return (
    <div className="w-full h-full flex-col flex justify-center items-center bg-transparent">
        <span className="loader"></span>
        <p className="text-orange-700 font-black">{uploading? "uploading" : "Waiting to load Movies"}</p>
    </div>
  )
}
