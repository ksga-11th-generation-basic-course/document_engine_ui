import Cancel from "../assets/images/popUp/cancel.png"
import remove from "../assets/images/popUp/removeMember.svg"
export default function RemoveMember() {
  return (
    <div className='close_Account flex justify-center items-center bg-slate-400 w-full h-[100vh]'>
        <div className="popup w-[641px] h-[381px] relative flex  justify-center items-center rounded-md shadow-sm bg-white ">
            <div className='img  absolute top-5 right-[24px]'>
                <img src={Cancel} alt="" />
            </div>
            <div className='icon  flex  flex-col justify-center items-center '>
                <img src={remove} alt=""  className='w-[93px] pb-8'/>
                <div className='text text-accent text-center whitespace-nowrap  text-xl ' >
                    <p>Are your sure want to remove this member</p>
                    <p className='pt-2'>from this workspace?</p>
                </div>
                <div className='btn flex justify-around pt-12'>
                    <button className='w-[150px] h-[46px] text-accent text-lg font-bold border-accent  border-2  rounded-2xl mr-4'>No, cancel</button>
                    <button className='w-[150px] h-[46px] text-white text-lg  bg-[#FF5658] rounded-2xl'>Remove</button>
                </div>
            </div>
        </div>
    </div>
  )
}
