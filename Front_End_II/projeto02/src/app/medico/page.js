'use client';
import { useEffect, useState } from "react";
import styles from './medico.module.css';

const Medicos = () => {
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(true)
    const [medicos, setMedicos] = useState(null);
}