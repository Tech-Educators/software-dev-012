"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Accordian.css";

function AccordionDemo() {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <AccordionTrigger className="test">
          Did this work first time?
        </AccordionTrigger>
        <AccordionContent>No.</AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
        <AccordionTrigger>Does it work now?</AccordionTrigger>
        <AccordionContent>Yes.</AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-3">
        <AccordionTrigger>Do you understnad it?</AccordionTrigger>
        <AccordionContent>
          <a href="https://google.com">You tell me</a>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
