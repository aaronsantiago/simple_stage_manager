import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import { cloneDeep } from "lodash";
import { useEffect } from "react";

export const Card = ({ id, text, index, moveCard, commitChange }) => {
  const ref = useRef(null)
  const dragRef = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      console.log("end drag");
      const dropResult = monitor.getDropResult()
      if (item) {
        commitChange(item);
      }
    }
  })
  const opacity = isDragging ? 0 : 1
  drop(ref);
  drag(dragRef)
  return (
    <div ref={ref} data-handler-id={handlerId}>
      <span ref={dragRef}>drag me</span> {text}
    </div>
  )
}
 
function DndTest(props) {
  const [cards, setCards] = useState([
    {
      id: 1,
      sort: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      sort: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      sort: 3,
      text: 'Write README',
    },
    {
      id: 4,
      sort: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      sort: 5,
      text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 6,
      sort: 6,
      text: '???',
    },
    {
      id: 7,
      sort: 7,
      text: 'PROFIT',
    },
  ]);
  
  const [sortedCards, setSortedCards] = useState([]);
  useEffect(() => {
    let sorted = cloneDeep(cards);
    sorted.sort((a, b) => a.sort - b.sort);
    setSortedCards(sorted);
  }, [cards]);


  const moveCard = useCallback((dragIndex, hoverIndex) => {
    console.log("card moved", dragIndex, hoverIndex)
    // setCards((prevCards) => {
    //   let newCards = cloneDeep(prevCards);
    //   let foundCard = newCards.find((card) => card.sort === dragIndex);
    //   foundCard.previewIndex = hoverIndex;
    //   return newCards;
    // });
    // console.log("moving card");
    setSortedCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])

  const commitChange = useCallback((i, dr) => {
    console.log("committing change", i, dr);
  }, []);

  return (
    <>
     <div>{sortedCards.map((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
          commitChange={commitChange}
        />
      )
    })}</div>
    </>
  );
}

export default DndTest;
