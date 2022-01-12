package com.devsuperior.dsmovie.dto;

import com.devsuperior.dsmovie.entities.Movie;

public class MovieDTO {
	
	private Long id;
	private String title,image;
	private Double score;
	private Integer count;
	
	public MovieDTO() {
		
	}

	public MovieDTO(Long id, String title, String image, Double score, Integer count) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.score = score;
		this.count = count;
	}
	
	public MovieDTO(Movie movie) {
		id = movie.getId();
		title = movie.getTitle();
		image = movie.getImage();
		score = movie.getScore();
		count = movie.getCount();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}
	
	
}
