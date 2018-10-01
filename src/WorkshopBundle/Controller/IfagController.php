<?php

namespace WorkshopBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

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