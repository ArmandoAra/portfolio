import profileImage from "../../assets/images/profile/Profile.png"

export function ProfileImageContainer() {
    return (
        <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-1/2 bottom-0 overflow-hidden ">
            <div className="relative w-full flex justify-center lg:justify-start  h-auto lg:h-[70vh]">
                <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto h-screen "></div>
                <div>
                    <img
                        src={profileImage}
                        alt="Profile image"
                        className="w-auto h-full"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}