import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomePage from "../components/HomePage";
import HomePageMentors from "../components/HomePageMentors";
import HomePageThird from "../components/HomePageThird";
import HomePageProjects from "../components/HomePageProjects";
import HomePageFooter from '../components/HomePageFooter';
import { useSession } from 'next-auth/react';
import {useEffect} from "react";
import { atom, useRecoilState } from 'recoil';
import {doc, setDoc, query, collection, where, getDocs} from "@firebase/firestore";
import {serverTimestamp} from "@firebase/database";
import {db} from '../firebase';
import WirooomBGImage from "../assets/WIROOOM/hompage_dashboard.svg";
import WirooomLogo from "../assets/LOGOS/logo.png";

export const userInformationState = atom({
    key: 'userInformationState',
    default: {},
})

const Home: NextPage = () => {
    const [userInformation,  setUserInformation] = useRecoilState(userInformationState);
    const {data: session, status} = useSession();
    useEffect(() => {
        if(status === 'authenticated') {
            // alert('The user is Logged in')
            setUserInformation(session);
            createUserInDb(session.user);
        }
    }, [status]);

    const createUserInDb = async (userData: any) => {
        if (!userData) return;
        // @ts-ignore
        const q = query(collection(db, "users"), where("uid", "==", userData.uid));
        // @ts-ignore
        const docs = await getDocs(q);
        // console.log(auth().currentUser)
        if (docs.docs.length === 0) {
            setDoc(doc(db, 'users', userData.uid), {
                ...userData,
                createdAt: serverTimestamp(),
            }).then((res) => {
                return true;
            }).catch(error => {
                alert(error);
            });
        } else {
            return false;
        }
    };

    // useEffect(() => {
    //     const addProjectToDatabase = async () => {
    //         // const docRef = collection(db, 'projects')
    //         await setDoc(doc(db, 'projects', `Wirooom-forbesGoesWeb3`), {
    //             name: 'Wirooom',
    //             title: 'One magic line of code supercharges your development with the world’s most powerful blockchain developer platform.',
    //             description: `Wirooom provides the leading blockchain development platform powering hundreds of users in 197 countries worldwide.
    //              Our mission is to provide developers with the fundamental building blocks they need to create the future of technology.`,
    //             image: WirooomBGImage,
    //             avatar: WirooomLogo,
    //             creator: 'Tom, Rokas and Bratt',
    //             likes: 0,
    //             timestamp: serverTimestamp(),
    //             developedBy: 'Tom, Rokas and Bratt',
    //         })
    //         console.log('Completed');
    //     }
    //     addProjectToDatabase();
    // }, []);

  return (
    <div className="">
      <Head>
        <title>Forbes Goes Web 3.0</title>
        <link rel="icon" href="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/wul3ybafgoqnhy3ubyfq" />
      </Head>
      <div className="px-4 py-3 text-white bg-gray-900">
        <p className="text-sm font-medium text-center">
          Forbes Goes Web3, top 3 selected, vote for the top notch project!
        </p>
      </div>

        <HomePage />
        <HomePageMentors />
        <HomePageThird />
        <HomePageProjects />
        <HomePageFooter />

    </div>
  )
}

export default Home

