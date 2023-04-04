import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { bill,apple,google } from '../assets'

const Billing = () => {
  return (
    <section className={`${layout.section }`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient' />

      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="" className='w-[100%] h-auto' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You Do the Business <br className='sm:block hidden' /> We'll Handle The Money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="app_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer ' />
          <img src={google} alt="app_store" className='w-[128px] h-[42px] object-contain cursor-pointer ' />
        </div>
      </div>
    </section>
  )
}

export default Billing;