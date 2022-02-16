import {motion, AnimatePresence} from 'framer-motion';
import React from 'react';
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return 'No Feedback Yet'
    }


    return isLoading ? <Spinner /> : (

        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )



    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id}
    //                           item={item}
    //                           handleDelete={handleDelete} />
    //         ))}
    //     </div>
    // )
}


export default FeedbackList;