import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/noteContext';
export default function About() {
  const a = useContext(NoteContext);
  return (
    <div>{a.name} {a.Branch}</div>
  )
}
