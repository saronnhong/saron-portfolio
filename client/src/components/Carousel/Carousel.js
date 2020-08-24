import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const itemsSpeechBoard = [
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/speechboard01.jpg',
        altText: 'Slide 1',
        caption: 'Child friendly designs'
    },
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/speechboard02.jpg',
        altText: 'Slide 2',
        caption: 'Easy access to core words'
    },
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/speechboard03.jpg',
        altText: 'Slide 3',
        caption: 'Create your own words'
    },
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/speechboard04.jpg',
        altText: 'Slide 4',
        caption: 'Search and Settings options'
    }
];
const itemsJobTrak = [
    {
        src: process.env.PUBLIC_URL + '/images/jobtrak_applications-min.jpg',
        altText: 'Slide 1',
        caption: 'Keep Track of All Job Applications'
    },
    {
        src: process.env.PUBLIC_URL + '/images/jobtrak_addjobs-min.jpg',
        altText: 'Slide 2',
        caption: 'Add New Jobs to a MongoDB Database'
    },
    {
        src: process.env.PUBLIC_URL + '/images/jobtrak_editjobs-min.jpg',
        altText: 'Slide 3',
        caption: 'Edit & Update Job Applications'
    },
    {
        src: process.env.PUBLIC_URL + '/images/jobtrak_login-min.jpg',
        altText: 'Slide 4',
        caption: 'Secure Login'
    }
];
const itemsDani = [
    {
        src: process.env.PUBLIC_URL + '/images/dani_ss.png',
        altText: 'Slide 1',
        caption: 'Look Listen Learn'
    },
    {
        src: process.env.PUBLIC_URL + '/images/farm_sounds2-min.jpg',
        altText: 'Slide 2',
        caption: 'Animal Sounds'
    },
    {
        src: process.env.PUBLIC_URL + '/images/nature_sounds-min.jpg',
        altText: 'Slide 3',
        caption: 'Nature Sounds'
    },
    {
        src: process.env.PUBLIC_URL + '/images/spelling_game-min.jpg',
        altText: 'Slide 4',
        caption: 'Spelling Game'
    }
];
const itemsMovies = [
    {
        src: process.env.PUBLIC_URL + '/images/wat2watch_survey-min.jpg',
        altText: 'Slide 1',
        caption: 'Survey'
    },
    {
        src: process.env.PUBLIC_URL + '/images/wat2watch_ss.jpg',
        altText: 'Slide 2',
        caption: 'Movie Reccomendations'
    }
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.size - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.size - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const speechBoard = itemsSpeechBoard.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption className="text-dark" captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    const jobTrak = itemsJobTrak.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption className="text-warning" captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    const Dani = itemsDani.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    const Movies = itemsMovies.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={props.itemsList === "itemsDani" ? itemsDani : (props.itemsList === "itemsMovies" ? itemsMovies : itemsJobTrak)} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {props.itemsList === "itemsSpeechBoard" ? speechBoard : null}
            {props.itemsList === "itemsDani" ? Dani : (props.itemsList === "itemsMovies" ? Movies : jobTrak)}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Example;