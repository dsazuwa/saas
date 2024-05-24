import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Pill from '../pill';

export default function FAQ() {
  return (
    <section className='mx-auto w-full max-w-screen-lg space-y-10 px-6'>
      <div className='flex flex-col items-center gap-1'>
        <Pill>FAQs</Pill>

        <h2 className='text-center text-[28px] font-medium md:text-[32px]'>
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type='single' collapsible className='mx-auto max-w-4xl'>
        {questions.map(({ title, content }, index) => (
          <AccordionItem key={`question-${index}`} value={`question-${index}`}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

const questions = [
  {
    title: 'What features does AvalonX offer',
    content:
      'AvalonX offers a wide range of features including project management tools, collaboration capabilities, analytics and arereporting, communication channels, integration options, are more.',
  },
  {
    title: 'How quickly can I see results with AvalonX?',
    content:
      'The timeline for seeing results with AvalonX can vary depending on factors such as the size and complexity of business, your specific goals and objectives, and how effectively you and your team utilize the platform.',
  },
  {
    title: 'Is AvalonX available internationally?',
    content:
      'If AvalonX is a specific product, service, or company, you may want to check its official website or contact its customer support to inquire about its availability internationally.',
  },
  {
    title: 'Is AvalonX suitable for small businesses?',
    content:
      'Yes, AvalonX is suitable for businesses of all sizes, including small businesses. Our platform is scalable and customizable, allowing businesses to tailor their experience according to their unique requirements and budget constraints.',
  },
  {
    title: 'Does AvalonX offer customer support?',
    content:
      'Yes, AvalonX provides dedicated customer support to assist users with any questions, issues, or technical challenges they may encounter. Our support team is available via email, live chat, and phone during business.',
  },
  {
    title: 'How does AvalonX ensure data security?',
    content:
      'Data security is a top priority for AvalonX. The platform employs industry-standard encryption protocols, access controls, and regular security audits to safeguard sensitive information. Additionally,',
  },
];
