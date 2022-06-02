import type {NextPage} from 'next'
import Head from 'next/head'
import {faker} from '@faker-js/faker';
import {useEffect, useState} from "react";
import {serverTimestamp} from "@firebase/database";
import {doc, setDoc} from "@firebase/firestore";
import {db} from "../firebase";
const generate = require('project-name-generator');

const Home: NextPage = () => {
    // const [number, setNumber] = useState(0);
    // useEffect(() => {
    //
    //
    // }, [number]);
    //
    // const runForLoop = () => {
    //     for(let i = 0; i < 100; i++) {
    //         // console.log(i);
    //         setNumber(i);
    //     }
    // }
    //
    // useEffect(() => {
    //     // runForLoop();
    //     for(let i = 0; i < 100; i++) {
    //         // console.log(i);
    //         // setNumber(i);
    //         faker.setLocale('en');
    //         const uploadToTheFirebase = async () => {
    //             const formEmail = faker.internet.email();
    //             const formUserUid = `${Math.random().toString(36).substr(2, 9)}-wirooom@${formEmail}`;
    //
    //             // let match = formEmail.match(/^(\w+)\..*\.(\w+)@/);
    //             // let empname = match[1];
    //             // let emplname = match[2];
    //
    //             const newObj = {
    //                 fullName: formEmail,
    //                 userEmail: formEmail,
    //                 userUid: formUserUid,
    //                 userImage: faker.image.people(),
    //                 userName: formEmail,
    //                 userPlan: 'freePlan',
    //                 userRole: 'user',
    //                 tokenExpiration: faker.date.future(),
    //                 token: faker.random.alphaNumeric(10),
    //                 createdAt: serverTimestamp(),
    //             };
    //
    //             await setDoc(doc(db, 'users', formUserUid), newObj);
    //
    //         }
    //         uploadToTheFirebase();
    //     }
    // }, [])

    // useEffect(() => {
    //     faker.setLocale('en');
    //     const uploadToTheFirebase = async () => {
    //         const formEmail = faker.internet.email();
    //         const formUserUid = `${Math.random().toString(36).substr(2, 9)}-wirooom@${formEmail}`;
    //
    //         // let match = formEmail.match(/^(\w+)\..*\.(\w+)@/);
    //         // let empname = match[1];
    //         // let emplname = match[2];
    //
    //         const newObj = {
    //             API_KEY: 'sfskjdaslkdjaskldjlkjsdshgisdyfewrjk@-wirooom',
    //             MEDIAN_RESPONSE: 0,
    //             REQUESTS: 0,
    //             THROUGHPUT_LIMITED: 0,
    //             THROUGHPUT_UNLIMITED: 0,
    //             appID: `${Math.random().toString(36).substr(2, 9)}-wirooom`,
    //             authorUid: formUserUid,
    //             projectChain: 'projectChain',
    //             projectName: generate().spaced,
    //             projectDescription: faker.lorem.paragraph(),
    //             projectEcosystem: 'Ethereum',
    //             projectNetwork: 'Ropsten',
    //             projectStatus: 'active',
    //             projectType: 'private',
    //             projectUid: `${Math.random().toString(36).substr(2, 9)}-wirooom`,
    //             projectUrl: 'https://wirooom.com',
    //             projectVersion: '1.0.0',
    //             projectWebsite: 'https://wirooom.com',
    //             projectCreatedAt: serverTimestamp(),
    //             projectUpdatedAt: serverTimestamp(),
    //             projectCreatedBy: formUserUid,
    //             projectUpdatedBy: formUserUid,
    //             projectCreatedByName: formEmail,
    //             projectUpdatedByName: formEmail,
    //             projectCreatedByImage: faker.image.people(),
    //             projectUpdatedByImage: faker.image.people(),
    //             projectCreatedByRole: 'user',
    //             projectUpdatedByRole: 'user',
    //             projectCreatedByPlan: 'freePlan',
    //             projectUpdatedByPlan: 'freePlan',
    //             projectCreatedByToken: faker.random.alphaNumeric(10),
    //             projectUpdatedByToken: faker.random.alphaNumeric(10),
    //             projectCreatedByTokenExpiration: faker.date.future(),
    //             projectUpdatedByTokenExpiration: faker.date.future(),
    //             projectCreatedByTokenUpdatedAt: serverTimestamp(),
    //             createdAt: serverTimestamp(),
    //             fullName: formEmail,
    //             userEmail: formEmail,
    //             userUid: formUserUid,
    //             userImage: faker.image.people(),
    //             userName: formEmail,
    //             userPlan: 'freePlan',
    //             userRole: 'user',
    //             tokenExpiration: faker.date.future(),
    //             token: faker.random.alphaNumeric(10),
    //         };
    //
    //         await setDoc(doc(db, 'projects', formUserUid), newObj);
    //
    //     }
    //     uploadToTheFirebase();
    //
    // }, [number]);
    //
    // const runForLoop = () => {
    //     for(let i = 0; i < 100; i++) {
    //         // console.log(i);
    //         setNumber(i);
    //     }
    // }
    //
    // useEffect(() => {
    //     runForLoop();
    // }, [number])


    // useEffect(() => {
    //     faker.setLocale('ru');
    //     const uploadToTheFirebase = async () => {
    //         const formEmail = faker.internet.email();
    //         const formUserUid = `${Math.random().toString(36).substr(2, 9)}-wirooom@${formEmail}`;
    //
    //         // let match = formEmail.match(/^(\w+)\..*\.(\w+)@/);
    //         // let empname = match[1];
    //         // let emplname = match[2];
    //
    //         const newObj = {
    //             fullName: formEmail,
    //             userEmail: formEmail,
    //             userUid: formUserUid,
    //             userName: formEmail,
    //             userRole: 'user',
    //             tokenExpiration: faker.date.future(),
    //             token: faker.random.alphaNumeric(10),
    //             feedback: '',
    //             feedbackType: 'userFeedback',
    //             isNewUser: true,
    //         };
    //
    //         await setDoc(doc(db, 'feedback', formUserUid), newObj);
    //
    //     }
    //     uploadToTheFirebase();
    //
    // }, [number]);
    //
    // const runForLoop = () => {
    //     for(let i = 0; i < 100; i++) {
    //         // console.log(i);
    //         setNumber(i);
    //     }
    // }
    //
    // useEffect(() => {
    //     runForLoop();
    // }, [number])


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  )
}

export default Home
