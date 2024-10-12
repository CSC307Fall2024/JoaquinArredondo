import prisma from '@/db';

import type { Job } from '@prisma/client';

export default async function Job({ params } : { params: { id: string } }) {

  const job = await prisma.job.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  return (
    <div>this is a job description: { job?.description } </div>
  );
};

