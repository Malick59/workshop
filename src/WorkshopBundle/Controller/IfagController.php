<?php

namespace WorkshopBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IfagController extends Controller
{
    /**
     * @Route("/")
     */
    public function homeAction()
    {
        return $this->render('WorkshopBundle:Ifag:subhomepage.html.twig');
    }
}