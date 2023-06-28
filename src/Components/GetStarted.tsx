const GetStarted = () => {
    return (
        <>
        <div className="flex flex-col items-center box-border h-90 w-100 p-4   m8 box-content">
        <h1 className="mb-4  pb-4 text-6xl leading-tight font-bold text-white">Revolutionizing Link Optimization</h1>
        <button
  type="button"
  className="inline-block flex justify-center rounded-full bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
  Get Started
</button>
        </div>

        <div className="w-[476px] h-[355px] p-[42px] bg-white rounded-xl flex-col justify-center items-start gap-6 inline-flex">
  <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
    <div className="w-[392px] h-[55px] px-3 py-2 rounded-xl border border border border border-blue-500 flex-col justify-center items-start gap-2.5 flex">
     <div className="px-3 py-2 flex-col justify-center items-center gap-2.5 flex">
        <div className="text-blue-500 text-[12px] font-normal leading-none">Paste URL here...</div>
      </div>
    </div>
    <div className="justify-center items-center gap-3 inline-flex">
      <div className="w-[202px] h-12 px-5 py-[18px] rounded-xl border border border border border-blue-500 justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 text-blue-500 text-[14px] font-normal leading-3">Choose Domain</div>
        <div className="w-3 h-1.5 relative"></div>
      </div>
      <div className="w-[178px] h-12 px-3 py-2 rounded-xl border border border border border-blue-500 flex-col justify-center items-start gap-2.5 inline-flex">
        <div className="px-3 py-2 flex-col justify-center items-center gap-2.5 flex">
          <div className="text-blue-500 text-[12px] font-normal leading-none">Type Alias here</div>
        </div>
      </div>
    </div>
  </div>
  <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
    <div className="w-[392px] px-6 py-3 bg-blue-700 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
      <div className="text-white text-[14px] font-normal leading-3">Trim URL</div>
      <div className="p-1 justify-start items-start gap-2.5 flex">
        <div className="w-4 h-4 relative origin-top-left rotate-180"></div>
      </div>
    </div>
    <div className="w-[392px] p-2.5 justify-start items-center gap-2.5 inline-flex">
      <div className="w-[373px]"><span className="text-blue-500 text-[14px] font-normal leading-tight">By clicking TrimURL, I agree to the </span><span className="text-blue-500 text-[14px] font-normal leading-tight">Terms of Service, Privacy Policy</span><span className="text-blue-500 text-[14px] font-normal leading-tight"> </span><span className="text-blue-500 text-[14px] font-normal leading-tight">and Use of Cookies.</span></div>
    </div>
  </div>
</div>
        
        </>
    );
    }

export default GetStarted;