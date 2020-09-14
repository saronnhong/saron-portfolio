import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import "./style.css";

const itemsSpeechBoard = [
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/IMG_7866-min.PNG',
        altText: 'Easy access to core words',
        caption: 'Intuitive Categories'
    },
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/IMG_7867-min.PNG',
        altText: 'Create your own sentences',
        caption: 'Create your own sentences'
    },
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/IMG_7868-min.PNG',
        altText: 'Create your own sentences',
        caption: ''
    },
    // {
    //     src: process.env.PUBLIC_URL + '/images/speechboard-ss/IMG_7869-min.PNG',
    //     altText: 'Create your own words',
    //     caption: 'Create your own words'
    // },
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/IMG_7870-min.PNG',
        altText: 'Create your own words',
        caption: 'Create your own words'
    },
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/IMG_7873-min.PNG',
        altText: 'Ability to use the new words you created',
        caption: 'Ability to use the new words you created'
    },
    {
        src: process.env.PUBLIC_URL + '/images/speechboard-ss/IMG_7874-min.PNG',
        altText: 'Search through entire word database',
        caption: 'Search through entire word database'
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
                <CarouselCaption captionHeader={item.caption} />
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
            {props.itemsList === "itemsDani" ? Dani : (props.itemsList === "itemsMovies" ? Movies : (props.itemsList === "itemsSpeechBoard" ? speechBoard : jobTrak))}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Example;