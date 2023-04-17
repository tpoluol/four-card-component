import Header from './components/Header';
import Card from './components/Card';
import datas from './data';
import { useState } from 'react';
function App() {
  const [data] = useState(datas);
  return (
    <main className="bg-VeryLightGray flex-col font-poppins flex justify-center items-center min-h-screen">
      <article className="m-6 mt-20">
        <Header />
        <div className="flex flex-col gap-5 mt-16">
          {data.map((data, index) => {
            return (
              <Card
                key={index}
                title={data.title}
                content={data.content}
                color={data.color}
                imgU={data.imgU}
              />
            );
          })}
        </div>
      </article>
    </main>
  );
}

export default App;
