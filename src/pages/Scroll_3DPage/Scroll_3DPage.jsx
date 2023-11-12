import { useEffect, useRef, useState } from 'react';
import cl from './Scroll_3DPage.module.css';
import chains from './2.jpg';
import video1 from './video2.mp4';
import snowChains from './5.jpg'
import river from './4.jpg';
import chains3 from './3.jpg';
import video2 from './video1.mp4';
import aud from './a.wav'
import { useLocation } from 'react-router-dom';

const Scroll_3DPage = () => {
    const [frames, setFrames] = useState([
        { content: 'BEAUTIFUL WORLD', isLeft: false, isCenter: true, isMedia: false },
        { content: chains, isLeft: true, isMedia: true, frame_bg: false },
        { content: video1, isVideo: true, isLeft: false, isMedia: false, frame_bg: true },
        { content: '' },
        { p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content: 'PURE PLANET', isLeft: false, isCenter: false, isMedia: false },
        { content: snowChains, isLeft: true, isMedia: true, frame_bg: true },
        { content: '' },
        { content: river, isLeft: false, isMedia: true, frame_bg: true },
        { content: '' },
        { p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', content: 'ASK THE MOUNTAINS', isLeft: true, isCenter: false, isMedia: false },
        { content: chains3, isLeft: false, isMedia: true, frame_bg: true },
        { content: '' },
        { content: '' },
        { content: video2, isVideo: true, isLeft: false, isMedia: false, frame_bg: true, end: true },

    ])
    let [flagLoad, setFlagLoad] = useState(false);
    const audit = useRef(new Audio(aud))
    const rap =  function() {
            audit.current.paused ? audit.current.play() : audit.current.pause();
        }
    const par = () => {
        audit.current.pause()
    }

    const location = useLocation();

    useEffect(() => {
        return () => {
            par()
        }
    }, [location])

    window.onscroll = function () {

        let top = document.documentElement.scrollTop;

        frames.forEach((item, index) => {
            let position = -1000 * index + top * 5;
            if (position >= 700) {
                item.opacity = 0;
            } else {
                item.opacity = 1;
            }
            item.translateZ = `translateZ(${position}px)`;
        })
        setFrames([...frames])
        setFlagLoad(true)
    }

    if (!flagLoad) window.scrollTo(0, 1)

    return (
        !flagLoad ?
            <></>
            :
            <div className={cl.container}>
                <div onClick={rap} className={cl.audio}>Click me</div>
                <section className={cl.section}>
                    {
                        frames.map((item, index) =>
                            <div className={`${cl.frame} ${item.frame_bg ? cl.frame_bg : null}`} key={index} style={{ transform: item.translateZ, opacity: item.opacity }}>
                                <div className={`${item.isLeft ? cl.left : cl.right} ${item.isCenter ? cl.center : null} ${item.isMedia ? cl.img : cl.video} ${item.end ? cl.end : null}`}>
                                    <div>
                                        {
                                            item.isMedia ?
                                                <img alt="Стетхэм" src={item.content} />
                                                :
                                                item.isVideo ?
                                                    <video autoPlay muted loop>
                                                        <source src={item.content} type="video/mp4" />
                                                    </video>
                                                    :
                                                    <>
                                                        <h5 className={cl.h2}>{item.content}</h5>
                                                        <p className={cl.p}>{item.p}</p>
                                                    </>
                                        }
                                    </div>
                                </div>
                            </div>)
                    }
                </section>
            </div>
    );
};

export { Scroll_3DPage };