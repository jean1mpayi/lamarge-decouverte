import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ApplicationForm from './components/ApplicationForm';
import SuccessMessage from './components/SuccessMessage';

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Layout>
      <Hero />
      
      <div className="mt-12">
        {isSuccess ? (
          <SuccessMessage />
        ) : (
          <ApplicationForm onSuccess={() => setIsSuccess(true)} />
        )}
      </div>
    </Layout>
  );
}

export default App;
