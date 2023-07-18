import React from "react";
import {Box, Heading, CloseButton, IconButton} from "@chakra-ui/react";
import {ChevronUpIcon, ChevronDownIcon, DragHandleIcon} from "@chakra-ui/icons";
import {useCallback} from "react";
import {useState} from "react";
import {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";

function Panel({id, index, moveCard, commitChange, ...props}) {
  const ref = useRef(null);
  const dragRef = useRef(null);
  const [{handlerId}, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{isDragging}, drag] = useDrag({
    type: "card",
    item: () => {
      return {id, index};
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        commitChange(item, dropResult);
      }
    },
  });
  const opacity = isDragging ? 0 : 1;
  drop(ref);
  drag(dragRef);

  return (
    <Box
      position="relative"
      {...props}
      shadow="md"
      borderWidth="1px"
      height="100%"
      ref={ref}
      data-handler-id={handlerId}
    >
      {props.onClose == null ? null : (
        <CloseButton
          position="absolute"
          top="0"
          right="0"
          onClick={props.onClose}
        />
      )}
      {commitChange == null ? null : (
        <IconButton
          variant="unstyled"
          position="absolute"
          top="0"
          right="7"
          size="sm"
          ref={dragRef}
          icon={<DragHandleIcon />}
        />
      )}
      {/* {props.onMoveUp == null ? null : (
        <IconButton
          variant="unstyled"
          position="absolute"
          top="0"
          right="7"
          size="sm"
          onClick={props.onMoveUp}
          icon={<ChevronUpIcon />} 
        />
      )}
      {props.onMoveDown == null ? null : (
        <IconButton
          position="absolute"
          top="0"
          variant="unstyled"
          size="sm"
          right="14"
          onClick={props.onMoveDown}
          icon={<ChevronDownIcon />} 
        />
      )} */}
      <Heading p={2} as="h5" size="xs">
        {props.heading}
      </Heading>
      {props.children}
    </Box>
  );
}

export default Panel;
