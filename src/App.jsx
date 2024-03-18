import './index.css'
import Collapse from './components/Collapse'
import { Tabs, Tab } from './components/Tab'
 import { tabs_content } from './constants/constants'


function App() {

  return (
    <>
      <div className='be-vietnam h-full w-full bg-grey-400 bg-contain bg-top bg-no-repeat' style={{ backgroundImage: `url("./faq-title-bg.png")` }} >
        <div className='flex flex-col items-center px-100'>
          <header className='text-center mt-[72px] text-white mx-6'>
            <h1 className='color-grey-300'>Frequently Asked <br /> Questions</h1>
            <div className='mt-[96px] flex flex-col gap-[16px]'>
              <h3>Products, Website or Brand Design, we’ve got you covered!</h3>
              <p className='text-grey-300'>Give us your questions, and we can help you achieve our goals together!</p>
            </div>
          </header>
          <div className='mt-[40px] mb-52 px-100 items-center'>
            <Tabs className="text-white mt-10 flex flex-col items-center">
              {tabs_content.map((tab, index) => (
                <Tab key={index} label={tab.label}>
                    {tab.collaspes.map((collapse, index) => (
                      <Collapse key={index} title={collapse.title} text={collapse.content} open={collapse.open} />
                    ))}
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

