<?php

namespace WorkshopBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class EpsiController extends Controller
{
    /**
     * @Route("/")
     */
    public function homeAction()
    {
        return $this->render('WorkshopBundle:Epsi:subhomepage.html.twig');
    }
}