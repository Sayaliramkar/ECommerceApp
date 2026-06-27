import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-garay-600'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam quidem! Pariatur earum veniam libero. Modi amet minima, aut sequi pariatur, asperiores delectus dolores molestiae illum tenetur sit veritatis accusantium.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum nihil dolore quos explicabo corrupti est, delectus sequi placeat illo? Impedit numquam rerum sequi, architecto facilis non quae molestias, vero iste obcaecati minus ut beatae assumenda accusamus repudiandae a esse.</p>
             <b className='text-gray-800 '>Our Mission</b>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem a vero recusandae tempore suscipit consequuntur saepe est reprehenderit blanditiis cupiditate.</p>
          </div>

      </div>

      <div className='text-2xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assuarance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto natus doloremque sunt quas veritatis quibusdam nemo hic, labore harum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto natus doloremque sunt quas veritatis quibusdam nemo hic, labore harum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto natus doloremque sunt quas veritatis quibusdam nemo hic, labore harum.</p>
        </div>
      </div>
      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default About