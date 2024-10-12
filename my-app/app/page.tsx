import Link from 'next/link'
import type { Job } from '@prisma/client';
import prisma from '../db';

export default async function Home() {

  const jobsList: Job[] = await prisma.job.findMany();

  const jobsItems = jobsList.map(job => (<li key={job.id}><Link href={`/jobs/${job.id}`}>{job.name}</Link></li>));

  return (
    <div>
      <h1>Hello Welcome! My Name is Joaquin Arredondo and this is some more about me! </h1>
      <h1> PHONE: (510)-857-7068 | EMAIL: JoaquinAnthonyArredondo@gmail.com</h1>
      <div>This is my resume</div>
      <h2>Skills</h2>
      <h1>Digitial Art, C, Software development, Video Game Development</h1>
      <h2>Projects</h2>
      <h2>Jobs</h2>
      <ol>
        {jobsItems}
      </ol>
    </div>
  );
}