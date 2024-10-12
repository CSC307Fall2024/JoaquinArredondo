import Link from 'next/link'
import type { Job } from '@prisma/client';
import prisma from '../db';

export default async function Home() {

  const jobsList: Job[] = await prisma.job.findMany();

  const jobsItems = jobsList.map(job => (<li key={job.id}><Link href={`/jobs/${job.id}`}>{job.name}</Link></li>));

  return (
    <div>
      <h1>Hi</h1>
      <div>This is my resume</div>
      <h2>Skills</h2>
      <h2>Projects</h2>
      <h2>Jobs</h2>
      <ol>
        {jobsItems}
      </ol>
    </div>
  );
}