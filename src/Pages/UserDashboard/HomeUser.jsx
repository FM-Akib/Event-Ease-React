import useUserInfo from "../../Hooks/useUserInfo";


const HomeUser = () => {

   const {userInfo} = useUserInfo();
   console.log(userInfo);

    return (
<div
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-300 via-yellow-500 to-orange-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
       {userInfo?.name}
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">{userInfo?.email}</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt=""
        src={userInfo?.image}
        className="size-32 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="text-pretty text-sm text-gray-500">
    Manage your bookings, track payments, and plan your perfect event with ease. Let’s make your event planning seamless and enjoyable!
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Event Ease</dt>
      <dd className="text-xs text-gray-500">Wlecome to</dd>
    </div>

    {/* <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Reading time</dt>
      <dd className="text-xs text-gray-500">3 minute</dd>
    </div> */}
  </dl>
</div>
    );
};

export default HomeUser;