
import Head from 'next/head';
import Image from 'next/image';
import authImg from '../../images/image.png'
import logo from '../../images/image 2.png'
import Link from 'next/link';
import google from '../../images/pngwing.com (34).png'
import facebook from '../../images/pngwing.com (35).png'
import apple from '../../images/pngwing.com (36).png'
export default function SignIn() {


    return (
        <div className=" bg-white h-screen flex items-center justify-center ">
            <Head>
                <title>Sign In - Millwrights LLC</title>
            </Head>
            <div className="bg-white mx-40 rounded-lg flex">
                <div className="hidden md:block w-3/5 ">
                    <Image
                        src={authImg}
                        alt=''
                        className="h-full w-full object-cover rounded-l-lg"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8">
                    <p className="text-center mb-4">Welcome to</p>
                    <div className="rounded-3xl border  shadow-lg p-4  ">
                        <div className="flex justify-center mb-6">
                            <Image
                                src={logo}
                                alt=''
                                className='w-28'
                            />
                        </div>
                        <h3 className="text-center text-xl font-medium mb-4">Sign in</h3>

                        <form className="space-y-4  p-4">
                            <div className='mb-6'>
                                <label htmlFor="email" className="block text-sm font-light">
                                    Enter your username or email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 text-sm block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm "
                                    placeholder="Username or email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-light ">
                                    Enter your Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 text-sm block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm "
                                    placeholder="Password"
                                />
                            </div>
                            <div className='grid w-3/5 items-center justify-self-center'>
                                <Link
                                    href="/main_dashboard"
                                    className='bg-[#BD9B58] py-2 px-10 mt-4 text-center rounded-lg text-white font-medium '
                                >
                                    Sign in
                                </Link>
                                <Link
                                    href='#'
                                    className='text-blue-500 text-center mt-3 text-sm'
                                >
                                    Forgot Password ?
                                </Link>
                            </div>
                        </form>

                        <div className=" my-6 text-center">
                            <p className="text-sm text-gray-600">Sign in with</p>
                            <div className="flex justify-center mt-2 space-x-8">
                                <button className="bg-blue-100 items-center gap-3 flex   text-sm text-blue-600 py-2 px-4 rounded-lg focus:outline-none">
                                    <Image
                                        src={google}
                                        alt=''
                                        className='w-7'
                                    />

                                    Sign in with Google
                                </button>
                                <button className=" text-white focus:outline-none">
                                    <Image
                                        src={facebook}
                                        className='w-7'
                                        alt=''
                                    />

                                </button>
                                <button className=" text-white focus:outline-none">
                                    <Image
                                        src={apple}
                                        className='w-12'
                                        alt=''
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
