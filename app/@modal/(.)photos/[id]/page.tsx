import React from 'react'
import ModalCp from '@/app/components/modalCp'

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return <ModalCp id={id} />
}
