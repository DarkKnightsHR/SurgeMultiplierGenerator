drop database if exists surgePricer;

create database surgePricer;

use surgePricer;

create table zone_day_time (
  id int not null auto_increment primary key,
  zone_id int not null,
  day_id int not null,
  time_id varchar(8) not null,
  unique (zone_id, day_id, time_id)
);

create table eyeball_history (
  id int not null auto_increment primary key,
  qty int not null,
  zone_day_time_id int not null,
  foreign key (zone_day_time_id) references zone_day_time(id)
);

create table driver_history (
  id int not null auto_increment primary key,
  qty int not null,
  zone_day_time_id int not null,
  foreign key (zone_day_time_id) references zone_day_time(id)
);

create table matched_history (
  id int not null auto_increment primary key,
  qty int not null,
  zone_day_time_id int not null,
  foreign key (zone_day_time_id) references zone_day_time(id)
);
