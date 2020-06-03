import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

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

    const slides1 = itemsDani.map((item) => {
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
    const slides2 = itemsMovies.map((item) => {
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
            <CarouselIndicators items={props.itemsList === "itemsDani" ? itemsDani : itemsMovies} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {props.itemsList === "itemsDani" ? slides1 : slides2}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Example;