import React from 'react';
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center px-2 text-white'>
      <h1 className='mb-20 text-5xl font-bold'>ChatGPT</h1>

      <div className='flex flex-row space-x-2 text-center'>
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <SunIcon className='h-8 w-8' />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>&ldquo;Explain something to me&rdquo;</p>
            <p className='infoText'>
              &ldquo;What is the difference between a cat and a dog?&rdquo;
            </p>
            <p className='infoText'>
              &ldquo;What is the color of the sun?&rdquo;
            </p>
          </div>
        </div>
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <BoltIcon className='h-8 w-8' />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>
              &ldquo;Change the ChatGPT Model to use&rdquo;
            </p>
            <p className='infoText'>
              Messages are stored in Firebase&apos;s Firestore
            </p>
            <p className='infoText'>
              Hot toast notifications when ChatGPT is thinking!
            </p>
          </div>
        </div>
        <div>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>
              May occassionally generate incorrect information
            </p>
            <p className='infoText'>
              May occassionally produce harmful instructions or biased content
            </p>
            <p className='infoText'>
              Limited knowledge of world and events after May 3, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
